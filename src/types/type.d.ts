interface ISales {
    sales: string
}

type SalesState = {
    sales: ISales
}

type SalesAction = {
    type: string
    sales: ISales
}

type DispatchType = (args: SalesAction) => SalesAction