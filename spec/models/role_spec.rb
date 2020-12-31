# frozen_string_literal: true

require 'rails_helper'

describe Role do
  it { is_expected.to have_and_belong_to_many :users }
  it { is_expected.to belong_to(:resource).optional }
  it { is_expected.to validate_inclusion_of(:resource_type).in_array(Rolify.resource_types) }
end
