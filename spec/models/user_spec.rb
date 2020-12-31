# frozen_string_literal: true

require 'rails_helper'

describe User do
  let!(:user) { FactoryBot.create(:user) }

  it { is_expected.to validate_uniqueness_of(:email).case_insensitive }

  describe 'email' do
    context 'when email address is valid' do
      it 'email that contains dots should be valid' do
        emails = %w[jane.smith@ems.edu username@ecc.uwex.edu smitj1234@students.uwc.edu jane.smith@ems.edu]
        check_mail(user, emails) { expect(user).to be_valid }
      end
    end

    context 'when email address is invalid' do
      it 'email should be invalid' do
        emails = %w[jane.smith@ @ecc.uwex.edu smitj1234students.uwc.edu]
        check_mail(user, emails) { expect(user).not_to be_valid }
      end
    end
  end
end

def check_mail(user, emails)
  emails.each do |e|
    user.email = e
    yield
  end
end
