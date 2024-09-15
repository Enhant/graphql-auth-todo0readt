import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation Register($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      id
    }
  } 
`;

export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput)
  }
`;

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      description
      completed
      status
    }
  }
`;

export const CREATE_TODO = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      completed
    }
  }
`;

export const TOGGLE_TODO_COMPLETION = gql`
  mutation ToggleTodoCompletion($id: ID!) {
    toggleTodoCompletion(id: $id) {
      id
      completed
    }
  }
`;