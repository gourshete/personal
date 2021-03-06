class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  after_create :user_registration_email
  after_destroy :user_destroy_email

  has_many :notes

  def send_notice
    AdminEmailTemplateMailer.deliver_now
  end

  private
  def user_registration_email
    UserRegistrationMailer.registration(self).deliver_now
  end

  def user_destroy_email
    #setup mailer
  end
end
