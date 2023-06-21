enum UserRole {
  Administrator = 'administrator',
  Moderator = 'moderator',
  User = 'user',
  Guest = 'guest'
}

interface User {
  role: UserRole;
}

const user: User = {} as User;

switch(user.role) {
  case UserRole.Administrator:  console.log('Administrator');
  case UserRole.Moderator: console.log('Moderator')
}