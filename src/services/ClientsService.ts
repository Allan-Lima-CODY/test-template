import type { ApplicationFields } from '@/models/Application'
import type { AddressFields } from '../models/Address'
import type { Clients, ClientsFields } from '../models/Client'
import { AddressService } from './AddressService'
import { ApplicationService } from './ApplicationService'
export const ClientsService =
{
    getAllClientData(): Clients[] {
        return [
            { id: 1, name: 'Granado', createdAt: '2024-04-24', cnpj: '33500095000161', stateRegistration: '388108598261',  status: 'Ativo', contact: 'Allan Lima', telefone: '3224885485', email: 'allan@smart01.com.br', bilingEmail: 'allanbiling@smart01.com.br', address: AddressService.getAllAddressData()[0], application: [ApplicationService.getAllApplicationData()[0]] },
            { id: 2, name: 'FFE', createdAt: '2024-04-23', cnpj: '33500095000162', stateRegistration: '388108598262',  status: 'Inativo', contact: 'Luana Miranda', telefone: '3224885485', email: 'luana@smart01.com.br', bilingEmail: 'luanabiling@smart01.com.br', address: AddressService.getAllAddressData()[1], application: [ApplicationService.getAllApplicationData()[1]] },
            { id: 3, name: 'MLL', createdAt: '2024-04-22', cnpj: '33500095000163', stateRegistration: '388108598263',  status: 'Ativo', contact: 'Lislaine', telefone: '3224885485', email: 'lislaine@smart01.com.br', bilingEmail: 'lislainebiling@smart01.com.br', address: AddressService.getAllAddressData()[2], application: [ApplicationService.getAllApplicationData()[2]] },
            { id: 4, name: 'Tumtum', createdAt: '2024-04-21', cnpj: '33500095000164', stateRegistration: '388108598264',  status: 'Inativo', contact: 'Giuliano', telefone: '3224885485', email: 'giuliano@smart01.com.br', bilingEmail: 'giulianobiling@smart01.com.br', address: AddressService.getAllAddressData()[3], application: [ApplicationService.getAllApplicationData()[3]] },
            { id: 5, name: 'Tamtam', createdAt: '2024-04-20', cnpj: '33500095000165', stateRegistration: '388108598265', status: 'Ativo', contact: 'Matheus', telefone: '3224885485', email: 'matheus@smart01.com.br', bilingEmail: 'matheusbiling@smart01.com.br', address: AddressService.getAllAddressData()[4], application: [ApplicationService.getAllApplicationData()[4]] },
            { id: 6, name: 'Papum', createdAt: '2024-04-19', cnpj: '33500095000166', stateRegistration: '388108598266',  status: 'Inativo', contact: 'Andrey', telefone: '3224885485', email: 'andrey@smart01.com.br', bilingEmail: 'andreybiling@smart01.com.br', address: AddressService.getAllAddressData()[5], application: [ApplicationService.getAllApplicationData()[5]] }
        ]
    },

    getAllClient(): Promise<Clients[]> {
        return Promise.resolve(this.getAllClientData())
    },

    defaultFields(): ClientsFields {
        return {
            name: '',

            cnpj: '',
            stateRegistration: '',
            status: '',
        
            contact: '',
            telefone: '',
            email: '',
            bilingEmail: '',
        
            address: AddressService.defaultFields() as AddressFields,

            application: ApplicationService.defaultFields() as ApplicationFields
        }
    }
}