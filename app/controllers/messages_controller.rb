class MessagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_message, only: [:destroy]

  def create
    @message = current_user.messages.build(message_params)

    if @message.save
      respond_to do |format|
        format.turbo_stream # responde com turbo_stream format
        format.html { redirect_to root_path } # fallback
      end
    end
  end

  def destroy
    @message.destroy
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

  def set_message
    @message = Message.find(params[:id])
  end
end
