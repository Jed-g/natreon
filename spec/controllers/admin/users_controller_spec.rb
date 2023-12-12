# frozen_string_literal: true

require "rails_helper"

RSpec.describe Admin::UsersController do
  let(:admin) { create(:user, user_type: "admin") }
  let(:user) { create(:user, user_type: "customer") }

  before do
    allow(controller).to receive(:current_user).and_return(current_user)
  end

  describe "GET #index" do
    context "when the user is an admin" do
      let(:current_user) { admin }

      before do
        get :all_users
      end

      it "returns a 200 response" do
        expect(response).to have_http_status :ok
      end
    end

    context "when the user is not an admin" do
      let(:current_user) { user }

      before do
        get :all_users
      end

      it "returns a 401 response" do
        expect(response).to have_http_status :unauthorized
      end
    end
  end

  describe "POST #update_user" do
    let(:user_params) { {id: user.id, email: "new_email@example.com", user_type: "reporter"} }

    context "when the user is an admin" do
      let(:current_user) { admin }

      before do
        post :update_user, params: user_params
      end

      it "updates the user and returns a 200 response" do
        expect(response).to have_http_status :ok
        expect(response.parsed_body["message"]).to eq "Updated user successfully"
        user.reload
        expect(user.email).to eq "new_email@example.com"
        expect(user.user_type).to eq "reporter"
      end
    end

    context "when the user is not an admin" do
      let(:current_user) { user }

      before do
        put :update_user, params: user_params
      end

      it "does not update the user and returns a 401 response" do
        expect(response).to have_http_status :unauthorized
        user.reload
        expect(user.email).not_to eq "new_email@example.com"
        expect(user.user_type).not_to eq "reporter"
      end
    end
  end

  describe "DELETE #delete_user" do
    let(:user_params) { {id: user.id} }

    context "when the user is an admin" do
      let(:current_user) { admin }

      before do
        delete :delete_user, params: user_params
      end

      it "deletes the user and returns a 200 response" do
        expect(response).to have_http_status :ok
        expect(response.parsed_body["message"]).to eq "Deleted user successfully"
        expect(User.find_by(id: user.id)).to be_nil
      end
    end

    context "when the user is not an admin" do
      let(:current_user) { user }

      before do
        delete :delete_user, params: user_params
      end

      it "does not delete the user and returns a 401 response" do
        expect(response).to have_http_status :unauthorized
        expect(User.find_by(id: user.id)).not_to be_nil
      end
    end
  end
end