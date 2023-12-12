require "rails_helper"

RSpec.describe MailingList do
    subject { described_class.new(email: "test@example.com") }
  
    describe "validations" do
      it "is not valid with an incorrectly formatted email" do
        subject.email = "testexample.com"
        expect(subject).not_to be_valid
      end
    end
end   