import { User } from 'core/domain/users'
import { LoginUser, RegisterUserResult, OAuthType } from 'core/domain/authorize'
import { UserClaim } from 'core/domain/authorize/userClaim'
import { UserRegisterModel } from 'models/users'

/**
 * Authentication service interface
 */
export interface IAuthorizeService {

    /**
     * Login the user
     */
  login: (email: string, password: string) => Promise<LoginUser>

   /**
    * Logs out the user
    */
  logout: () => Promise<void>

  /**
   * Whether user is login or not
   */
  isUserUserVerified: () => boolean

  /**
   * Get idToken
   */
  getUserClaim: () => Promise<UserClaim>

    /**
     * Update user password
     */
  updatePassword: (newPassword: string, confirmPassword: string) => Promise<void>

    /**
     * Register new user
     */
  registerUser: (user: UserRegisterModel) => Promise<RegisterUserResult>

  /**
   * On user authorization changed event
   */
  onAuthStateChanged: (callBack: (user: UserClaim) => void) => any

  /**
   * Reset user password
   */
  resetPassword: (email: string) => Promise<void>

  /**
   * Send email verification
   */
  sendEmailVerification: () => Promise<void>

  /**
   * Login user by OAuth authentication
   */
  loginWithOAuth: (type: OAuthType) => Promise<LoginUser>

  /**
   * Send sms verfication
   */
  sendSmsVerification: (phoneNumber: string, value: any) => Promise<string>

  /**
   * Send sms verfication
   */
  sendResetPasswordVerification: (email: string, value: any) => Promise<string>

  /**
   * Confirm verfication code
   */
  confirmVerificationCode: (code: string, verifyId: string, phoneNumber: string) => Promise<any>

  /**
   * Confirm verfication code
   */
  confirmResetPassword: (code: string, verifyId: string, email: string) => Promise<any>

  /**
   * Get current user id token
   */
  getIdToken: () =>  Promise<string>
}