import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchUser } from './userSlice'; // import your action

// Mock the API module
jest.mock('../userAPI/userAPI.js', () => ({
  fetchUserProfile: jest.fn(() => Promise.resolve({ 
    userName: "TestUser", 
    firstName: "Test", 
    lastName: "User" 
  })),
}));

// Create a mock Redux store
const mockStore = configureMockStore([thunk]);

test('fetchUser action', async () => {
  const store = mockStore({ user: { rememberMe: false } }); // initial state
  const token = "test_token";

  // Dispatch the action
  await store.dispatch(fetchUser(token));

  // Check the action(s) dispatched by the thunk
  const actions = store.getActions();
  expect(actions).toHaveLength(2);
  expect(actions[0].type).toBe('user/fetch/pending');
  expect(actions[1].type).toBe('user/fetch/fulfilled');
  expect(actions[1].payload).toEqual({ 
    user: { 
      userName: "TestUser", 
      firstName: "Test", 
      lastName: "User" 
    }
  });
});
