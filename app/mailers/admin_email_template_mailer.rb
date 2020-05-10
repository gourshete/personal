class AdminEmailTemplateMailer < ApplicationMailer

  def send_notice
    User.find_each(batch_size: 10) do |batch|
      mail_to(batch.email, subject: 'Email from Admin')
    end
  end
end
