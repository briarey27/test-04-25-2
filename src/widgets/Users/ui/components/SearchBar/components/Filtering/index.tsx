import { Input } from "shared/ui/Input";

interface IProps {
    filterValue: string;
    onChangeFilterValue: (val: string) => void;
}

export const Filtering = ({ filterValue, onChangeFilterValue }: IProps) => {
    const handleClear = () => {
        onChangeFilterValue("");
    };

    return (
        <Input
            onClear={handleClear}
            value={filterValue}
            label={"Filter by Company"}
            onChange={(event) => onChangeFilterValue(event.target.value)}
        />
    );
};
