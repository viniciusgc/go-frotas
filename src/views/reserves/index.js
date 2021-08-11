import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { ReserveCard } from '../../components';
import Layout from '../container/layout';
import { getReservations } from './actions';

function Reserves() {
  const [loading, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);

  const getReservationsData = async () => {
    setLoading(true);

    try {
      const data = await getReservations();

      setReservations(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReservationsData();
  }, []);

  return (
    <Layout>
      {loading && (
        <div className="loading mt-5">
          <ReactLoading type="spinningBubbles" color="#23195f" />
        </div>
      )}

      {!loading && (
        <div className="mb-5">
          <h1>Suas Reservas {`(${reservations.length})`}</h1>

          <hr />

          {reservations.map(reservation => (
            <ReserveCard
              reservation={reservation}
              key={reservation.CodigoReserva}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Reserves;
