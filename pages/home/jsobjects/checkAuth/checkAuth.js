export default {
  checkAuth: () => {
    // Проверяем, существует ли idToken
    if (!appsmith.store.token) {
      // Если токена нет, перенаправляем на страницу входа
			showAlert(`Token: ${appsmith.store.token}` + ' ' + 'no success');
		  navigateTo('login'); // Замените 'Login' на фактическое имя страницы входа в вашем приложении
    } else {
      console.log('ID-токен пользователя найден:', appsmith.user.userClaims);
			showAlert(`Token: ${appsmith.store.token}` + ' ' + 'success');
      // Дополнительная логика, если необходимо
    }
  }
}