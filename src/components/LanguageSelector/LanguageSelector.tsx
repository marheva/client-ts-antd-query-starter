import React, { useCallback, useMemo, useState } from 'react';
import { APP_LANGUAGES_VALUES } from '../../constants/languages';
import { Select } from '../common/Select';
import Wrapper from '../common/Wrapper';

const SELECT_PLACEHOLDER: string = "Select storage type";
const SELECT_LANGUAGES: {
    fr: string;
    en: string
} | any = APP_LANGUAGES_VALUES;
const DEFAULT_SELECTED_LANGUAGE: string = 'en';


function SelectLanguage({ ...props }: SelectLanguagePropsTypes): JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>(DEFAULT_SELECTED_LANGUAGE);

    const selectOptions = useMemo(() => {
        return (Object.keys({ ...SELECT_LANGUAGES }).map((languageLabel: any) => {
            return ({ label: languageLabel, value: SELECT_LANGUAGES[languageLabel] });
        }))
    }, [SELECT_LANGUAGES]);

    const onSelectChange = useCallback((value: string) => {
        setSelectedValue(prevValue => prevValue === value ? prevValue : value)
    }, []);

    return (
        <Wrapper>
            <Select
                placeholder={SELECT_PLACEHOLDER}
                value={selectedValue}
                options={selectOptions}
                onChange={onSelectChange}
                disabled={false}
            />
        </Wrapper>
    )

}
export default SelectLanguage