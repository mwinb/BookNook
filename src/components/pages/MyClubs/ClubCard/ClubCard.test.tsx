import ClubCard from './ClubCard';
import { API } from '../../../../__mocks__/mockAPI';
import { ReactWrapper, mount } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { mockUsers, mockClubs } from '../../../../__mocks__';

let renderedComponent: ReactWrapper;

beforeEach(async () => {
  jest.spyOn(API.prototype, 'getUser').mockResolvedValue(mockUsers[0]);
  await act(async () => {
    renderedComponent = mount(
      <BrowserRouter>
        <ClubCard club={mockClubs[0]}></ClubCard>
      </BrowserRouter>,
    );
  });
});

describe('Club Card', () => {
  it('renders club card with club name', () => {
    expect(renderedComponent.text()).toContain(mockClubs[0].name);
  });

  it('renders club card with book name', () => {
    expect(renderedComponent.text()).toContain(mockClubs[0].book);
  });

  it('renders Club card with the number of members', () => {
    expect(renderedComponent.text()).toContain(mockClubs[0].members.length);
  });

  it('retrieves the club owners user name', () => {
    expect(renderedComponent.text()).toContain(mockUsers[0].name);
  });
});