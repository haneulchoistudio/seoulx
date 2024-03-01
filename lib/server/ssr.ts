export function props<Props extends object>(data: Props) {
  return {
    props: data,
  };
}

export function redirect<
  Destination extends string,
  Permanency extends boolean
>(destination: Destination, permanent: Permanency) {
  return {
    redirect: {
      destination,
      permanent,
    },
  };
}
