import Button from "./Button";
import Input from "./Input";

export default function ConfirmForm({ value, onChange, onCancel }) {

    return (
        <>
            <Input label='confirmPassword' type="password" name='confirmPassword' value={value} onChange={onChange} />
            <div className="buttons">
                <Button type="button" label='cancel' onClick={onCancel} />
                <Button type="submit" label='confirm' />
            </div>
        </>
    )

}