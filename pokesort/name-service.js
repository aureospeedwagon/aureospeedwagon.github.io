function formatName(pokemonName) {

    const split = pokemonName.split('-');

    switch (pokemonName) {
        case 'nidoran-f':
            return 'NIDORAN \u2640';
        case 'nidoran-m':
            return 'NIDORAN \u2642';
        case 'mr-mime':
            return 'MR. MIME';
        case 'ho-oh':
            return 'HO-OH';
        case 'mime-jr':
            return 'MIME JR.';
        case 'porygon-z':
            return 'PORYGON-Z';
        case 'type-null':
            return 'TYPE: NULL';
        case 'jangmo-o':
            return 'JANGMO-O';
        case 'hakamo-o':
            return 'HAKAMO-O';
        case 'kommo-o':
            return 'KOMMO-O';
        case 'tapu-koko':
            return 'TAPU KOKO';
        case 'tapu-lele':
            return 'TAPU LELE';
        case 'tapu-bulu':
            return 'TAPU BULU';
        case 'tapu-fini':
            return 'TAPU FINI';
        case 'hoopa-unbound':
            return 'HOOPA UNBOUND';
        case 'mr-mime-galar':
            return 'GALARIAN MR. MIME';
        case 'mr-rime':
            return 'MR. RIME';
        case 'eternatus-eternamax':
            return 'ETERNAMAX ETERNATUS';
        case 'urshifu-single-strike-gmax':
            return 'GMAX URSHIFU';
        default:
            if (pokemonName.includes('-mega')) {
                return `MEGA ${split[0].toUpperCase()} ${(split[2] || '').toUpperCase()}`.trim();
            }

            if (pokemonName.includes('-gmax')) {
                return `GMAX ${split[0].toUpperCase()}`.trim();
            }

            if (pokemonName.includes('-alola')) {
                return `ALOALAN ${split[0].toUpperCase()}`;
            }

            if (pokemonName.includes('-galar')) {
                return `GALARIAN ${split[0].toUpperCase()}`;
            }

            return split[0].toUpperCase();
    }

}
