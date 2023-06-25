function spGetTranslations(value)
{
    switch(value){
	case "bem-vindo":
	    return spTranslations.pt;
	case "welcome":
	    return spTranslations.en;
	default:
	    return spTranslations.pt;
    }	
}

var spTranslations = {
    pt: {
	call_everyone:		'Ligar para todos',
    9999:			    'Não telefonar',
    25:                 'Ligação safadinha',
    73:                 'Ligar para flertar',
    74:                 'Flertar por SMS',
    157:                'Não é você, o problema é comigo...',
    165:                'Ligação romântica',
    61:                 'Mandar mensagem no celular',
    58:                 'Mandar foto engraçada por MMS',
    26:                 'Passar trote',
    121:                'Fofocar ao telefone',
    162:                'Ligação de aniversário',
    171:                'Ligar para agradecer',
    24:                 'Ligar para papear'
    },
    en: {
	call_everyone:		'Call everyone',
    9999:			    'Dont Call',
	25:					'Dirty call',
	73:					'Flirty Phone call',
	74:					'Flirty SMS',
	157:				'Its not you, its me...',
	165:				'Romantic call',
	61:					'SMS friendly text',
	58:					'SMS funny pic',
	26:					'Prank call',
	121:				'Gossip on phone',
	162:				'Birthday call',
	171:				'Thank You call',
	24:					'Wazzup call'
    }
};