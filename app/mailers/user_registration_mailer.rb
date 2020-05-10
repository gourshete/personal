class UserRegistrationMailer < ApplicationMailer
  def registration(user)
    @user = user
    mail(to: user.email, subject: 'Welcome to Rails learning')
  end
end

