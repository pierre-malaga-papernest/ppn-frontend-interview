import { catchError, EMPTY, Observable } from "rxjs";

export const catchErrorWithMessage = <T>(message: string) => (source: Observable<T>) => source.pipe(
  catchError(() => {
    console.error(message);
    return EMPTY;
  })
);
