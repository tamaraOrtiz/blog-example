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

  protected

  def resources
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
