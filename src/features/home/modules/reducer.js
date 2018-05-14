import { SELECT_PURCHASE } from './actions';

const initialState = {
  activePurchase: {
    category: '',
    description: '',
    id: '',
    reservedBy: '',
    title: '',
    type: ''
  },
  purchases: [
    {
      category: 'Category 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl ipsum. Vestibulum imperdiet, diam et dapibus mattis, enim est sagittis leo, in fringilla dui ex nec nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse condimentum ut eros et dictum. Nulla facilisi. Donec tincidunt tincidunt orci sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      id: '1',
      reservedBy: 'You',
      title: 'Purchase order title number 0000000000001',
      type: 'Type 1'
    },
    {
      category: 'Category 2',
      description: 'Praesent a eros sit amet libero auctor eleifend eget eget enim. Mauris porta diam quis justo lobortis, a aliquet justo varius. Integer porttitor velit sagittis placerat mattis. Suspendisse blandit a velit ut cursus. Integer malesuada vestibulum quam. Donec non diam sit amet felis auctor laoreet. Nullam vel lorem risus. Suspendisse sed tempor orci, laoreet fermentum risus. In arcu est, ullamcorper vitae risus non, sollicitudin vehicula orci.',
      id: '2',
      reservedBy: 'None',
      title: 'Purchase order title number 0000000000002',
      type: 'Type 2'
    },
    {
      category: 'Category 3',
      description: 'Curabitur convallis ligula tortor. Vestibulum auctor id lectus in porttitor. Fusce vitae dignissim tortor. Morbi non nunc turpis. Duis at tempus orci, et blandit ipsum. Maecenas egestas fermentum scelerisque. Curabitur posuere consectetur luctus. Integer volutpat viverra porta. Aliquam ligula quam, placerat ac massa a, suscipit sodales orci. Aliquam laoreet in tellus vel egestas. Curabitur fringilla metus magna expeliarmussimus.',
      id: '3',
      reservedBy: 'You',
      title: 'Purchase order title number 0000000000003',
      type: 'Type 3'
    },
    {
      category: 'Category 4',
      description: 'Ut pharetra justo sit amet ex blandit blandit. Etiam tincidunt, justo sit amet mollis aliquet, purus arcu porta velit, ut ornare ante mi eget est. Duis molestie lorem ac velit rutrum blandit. Nullam arcu nisl, porta non eleifend non, commodo ut nisi. Fusce mauris eros, ultricies in tempor vitae, rhoncus ac nisi. Aliquam hendrerit nisi urna, ut ultrices ipsum feugiat eget. Morbi elit tortor, pharetra semper porta sit amet, laoreet non neque.',
      id: '4',
      reservedBy: 'None',
      title: 'Purchase order title number 0000000000004',
      type: 'Type 4'
    },
    {
      category: 'Category 5',
      description: 'In blandit turpis odio, id maximus magna convallis nec. Praesent ornare blandit sapien pretium blandit. Aliquam mattis neque non massa ultrices facilisis. Nulla dapibus eros ac libero placerat hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque condimentum convallis metus sit amet ullamcorper. Nunc cursus lobortis placerat. Donec volutpat sed diam quis aliquet. Nulla sodales risus at diam efficitur, vel semper eros luctus.',
      id: '5',
      reservedBy: 'You',
      title: 'Purchase order title number 0000000000005',
      type: 'Type 5'
    }
  ]
};

export default function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case SELECT_PURCHASE:
      return {
        ...state,
        activePurchase: payload.purchase
      };
    default:
      return state;
  }
}
