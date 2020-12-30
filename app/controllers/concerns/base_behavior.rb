# frozen_string_literal: true

# Basic actions methods for controllers
module BaseBehavior
  extend ActiveSupport::Concern

  def index
    records = policy_scope(resources)
    render json: records,
           each_serializer: serializer,
           include: index_include,
           options: index_options
  end

  def show
    authorize(resource)
    render json: resource, serializer: serializer, include: show_include
  end

  def create
    authorize(resource)
    resource.save!
    render json: resource, serializer: serializer, include: show_include
  end

  def update
    authorize(resource)
    resource.assign_attributes(resource_params)
    resource.save!
    render json: resource, serializer: serializer, include: show_include
  end

  def destroy
    authorize(resource)
    resource.destroy!
    render json: resource, serializer: serializer, include: include
  end

  protected

  def resources
    raise NotImplementedError
  end

  def resource
    @_resource ||= if params[:id]
                     find_resource
                   else
                     initialize_resource
                   end
  end

  def resource_params
    raise NotImplementedError
  end

  def find_resource
    raise NotImplementedError
  end

  def initialize_resource
    raise NotImplementedError
  end

  def include
    []
  end

  def show_include
    include
  end

  def index_include
    include
  end

  def index_options
    {}
  end

  def serializer
    raise NotImplementedError
  end
end
