export class User {
  name: 'User',
  properties: {
    id: 'number',
    sName: 'string',
    sRoleName: 'string'
  },
  relations: {
    user: {
      model: 'User',
      type: 'belongsTo'
    }
  }
}