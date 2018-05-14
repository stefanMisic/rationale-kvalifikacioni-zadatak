export const SELECT_PURCHASE = '@home/SELECT_PURCHASE';

export function selectPurchase(purchase) {
  return {
    type: SELECT_PURCHASE,
    payload: {
      purchase
    }
  };
}
