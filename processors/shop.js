const axios = require('axios');

const processPendingTicket = async (message) => {
  console.log('[processPendingTicket]', message)
  
  if (message.body.tickets.quantity==1) {
    const post = { matchNumber: message.body.matchNumber ,category: message.body.tickets.category}
    const { data } = await axios.patch(
      "http://localhost:5000/api/tickets/pending",post
    );

  } else {
    const post = { matchNumber: message.body.matchNumber ,category: message.body.tickets.category}
    const { data1 } = await axios.patch(
      "http://localhost:5000/api/tickets/pending",post
    );
    const { data2 } = await axios.patch(
      "http://localhost:5000/api/tickets/pending",post
    );
  }

  console.log(res.data)
  return Promise.resolve('[processPendingTicket]')
};

const processCancelledTicket = async (message) => {
  console.log('[processCancelledTicket]', message)

  if (message.body.tickets.quantity==1) {
      const post = { matchNumber: message.body.matchNumber ,category: message.body.tickets.category}
      const { data } = await axios.patch(
        "http://localhost:5000/api/tickets/cancelled",post
      );

  } else {
    const post = { matchNumber: message.body.matchNumber ,category: message.body.tickets.category}
    const { data1 } = await axios.patch(
      "http://localhost:5000/api/tickets/cancelled",post
    );
    const { data2 } = await axios.patch(
      "http://localhost:5000/api/tickets/cancelled",post
    );
  }

  return Promise.resolve('[processCancelledTicket]')
};

const processReservedTicket = async (message) => {
  console.log('[processReservedTicket]', message)
  

  if (message.body.tickets.quantity==1) {
    const post = { matchNumber: message.body.matchNumber ,category: message.body.tickets.category}
    const { data } = await axios.patch(
      "http://localhost:5000/api/tickets/reserved",post
    );
  

} else {
  const post = { matchNumber: message.body.matchNumber ,category: message.body.tickets.category}
  const { data1 } = await axios.patch(
    "http://localhost:5000/api/tickets/reserved",post
  );

  const { data2 } = await axios.patch(
    "http://localhost:5000/api/tickets/reserved",post
  );

}


  
  return Promise.resolve('[processReservedTicket]')
};

const processMasterlist = async (message) => {
  console.log('[processMasterlist]', message)

  const { data } = await axios.post(
    "http://localhost:5000/api/tickets/match",message.body
  );
  return Promise.resolve('[processMasterlist]')
};

module.exports = {
  processPendingTicket,
  processReservedTicket,
  processCancelledTicket,
  processMasterlist
};
