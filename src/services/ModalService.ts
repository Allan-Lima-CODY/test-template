import type { ModalInfo } from "@/models/ModalInfo"
export const ModalService = 
{
    getFeatureModalInfo(modalType?: string) : ModalInfo
    {
        switch(modalType){
            case 'registered':
                return {
                title: 'Sucesso!',
                message : 'Funcionalidade registrada com sucesso!',
                borderColor : '#34D399',
                bgColor: '#DDEFEB',
                okTitle : 'Ok',
                noTitle : undefined
                };
            case 'warning':
            return {  
                title : 'Alerta',
                message : 'Deseja apagar essa funcionalidade?',
                borderColor : '#FFC800',
                bgColor: '#EFEADD',
                okTitle : 'Sim',
                noTitle : 'Não',
            }
            case 'linkedPlanError':
            return {
                title : 'Erro',
                message : 'É necessário desvincular essa funcionalidade de um plano antes de apagá-la!',
                borderColor : '#F87171',
                bgColor: '#EFDDDD',
                okTitle : 'Ok',
                noTitle : undefined,
            }
            case 'emptyNameError':
            return {
                title : 'Erro',
                message : 'É necessário desvincular essa funcionalidade de um plano antes de apagá-la!',
                borderColor : '#F87171',
                bgColor: '#EFDDDD',
                okTitle : 'Ok',
                noTitle : undefined,
            }  
            case 'success':
                return {
                    title:'Sucesso!',
                    message : 'Funcionalidade registrada com sucesso!',
                    borderColor : '#34D399',
                    bgColor: '#DDEFEB',
                    okTitle : 'Ok',
                    noTitle : undefined
                }
            default:
              return {
                title: '',
                message : '',
                borderColor : '#F87171',
                bgColor: '#EFDDDD',
                okTitle : '',
                noTitle : undefined
              }
          }
    }
}