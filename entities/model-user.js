export class User {
  name: 'User',
  properties: {
    id: 'number',
    sName: 'string',
    sRoleName: 'string'
  },
  relations: {
    arrArticles: {
      model: 'Article',
      type: 'hasAndBelongsToMany'
    }
  }
}