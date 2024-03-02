import { PropData, RedirectInfo } from "~/types";

export function props<Props extends object>(data: Props): PropData<Props> {
  return {
    props: data,
  };
}

export function redirect<
  Destination extends string,
  Permanency extends boolean
>(destination: Destination, permanent: Permanency): RedirectInfo<Destination, Permanency> {
  return {
    redirect: {
      destination,
      permanent,
    },
  };
}
