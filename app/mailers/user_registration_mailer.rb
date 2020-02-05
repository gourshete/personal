class UserRegistrationMailer < ApplicationMailer
  def registration(user)
    @user = user
    mail(to: user.email, subject: 'Welcome to Site')
  end
end
