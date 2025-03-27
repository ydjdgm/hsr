export interface ApiResponse {
    retcode: number;
    message: string;
    data: CharacterData;
}

export interface CharacterData {
    list: Character[];
    total: string;
}

export interface Character {
    entry_page_id: string;
    name: string;
    icon_url: string;
    display_field: DisplayField;
    filter_values: FilterValues;
    desc: string;
}

interface DisplayField {
    attr_level_1: string;
    attr_level_80?: string;
}

interface FilterValues {
    character_factions?: FilterCategory;
    character_paths?: FilterCategory;
    character_rarity?: FilterCategory;
    character_combat_type?: FilterCategory;
}

interface FilterCategory {
    values: string[];
    value_types: FilterValueType[];
    key: string | null;
}

interface FilterValueType {
    id: string;
    value: string;
    mi18n_key: string;
    icon: string;
    enum_string: string;
}