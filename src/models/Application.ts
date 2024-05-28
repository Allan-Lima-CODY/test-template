import type { Plans } from "./Plans"

export interface Application { 
    id: number
    createdAt: Date

    plan: Plans
    planPrice: number
    additionalPrice: number

    status: string

    contractedLicenses: number
    pricePerLicense: number

    effectiveDate: Date
    nextBillingDate: Date

    totalPrice: number
}

export interface ApplicationFields {
    id: number | null,
    
    product: any,
    plan: any,
    planPrice: number | null,
    additionalPrice: number | null,

    status: boolean,

    contractedLicenses: number,
    pricePerLicense: number

    effectiveDate: Date | null,
    nextBillingDate: Date | null,

    totalPrice: number
}
