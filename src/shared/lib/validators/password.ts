export const validatePassword = (password: string): string | null => {
  if (!password) return '비밀번호를 입력해주세요.'; //TODO: error message 분리
  if (password.length < 8) return '비밀번호는 8자 이상이어야 합니다.';
  if (!/[A-Z]/.test(password)) return '대문자를 포함해야 합니다.';
  if (!/[0 - 9] /.test(password)) return '숫자를 포함해야 합니다.';
  if (!/[!@#$%^&*]/.test(password)) return '특수문자를 포함해야 합니다.';

  return null;
}
