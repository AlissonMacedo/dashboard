import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import { fetchMeetupRequest } from '~/store/modules/meetup/actions';
import { Container, List, Button } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    async function loadMeetup() {
      try {
        // dispatch(fetchMeetupRequest());
      } catch (error) {
        toast.error('Occoreu um erro ao carregar os meetups');
      }
    }
    loadMeetup();
  }, [dispatch]);

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
}
