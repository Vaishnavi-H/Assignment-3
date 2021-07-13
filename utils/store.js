const cards = [
    {
      id: 'card-1',
      title: 'hire a good designer',
    },
    {
      id: 'card-2',
      title: 'Make sure the production',
    },
    {
      id: 'card-3',
      title: 'Lets try to make ready interactive',
    },
    {
      id: 'card-4',
      title: 'check with hire manager',
    },
    {
      id: 'card-5',
      title: ' hire manager',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Ideas',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'Tasks Proposed',
        cards: [],
      },
      'list-3': {
        id: 'list-3',
        title: 'Tasks Assigned',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2','list-3'],
  };
  
  export default data;