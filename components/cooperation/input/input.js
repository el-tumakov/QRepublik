import PropTypes from "prop-types";
import styles from "./input.module.scss";

const Input = (props) => {
  const {id, label, type, placeholder, value, onChange} = props;

  const handleChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
