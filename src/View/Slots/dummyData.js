const create_UUID = () => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};

export const slots = [
  {
    id: create_UUID(),
    start: '9AM',
    end: '10AM',
    status: 'Available',
    details: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },

  {
    id: create_UUID(),
    start: '10AM',
    end: '11AM',
    status: 'Available',
    details: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },

  {
    id: create_UUID(),
    start: '11AM',
    end: '12PM',
    status: 'Available',
    details: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },

  {
    id: create_UUID(),
    start: '12PM',
    end: '1PM',
    status: 'Available',
    details: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },

  {
    id: create_UUID(),
    start: '1PM',
    end: '2PM',
    status: 'Available',
    details: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },

  {
    id: create_UUID(),
    start: '2PM',
    end: '3PM',
    status: 'Available',
    details: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },

  {
    id: create_UUID(),
    start: '3PM',
    end: '4PM',
    status: 'Available',
    details: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },

  {
    id: create_UUID(),
    start: '4PM',
    end: '5PM',
    status: 'Available',
    details: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
];
