import { ButtonLoadMore, ButtonContainer } from './Button.styled';
import PropTypes from 'prop-types';

function Button({ onLoad }) {
  return (
    <ButtonContainer>
      <ButtonLoadMore type="button" onClick={onLoad}>
        Load more
      </ButtonLoadMore>
    </ButtonContainer>
  );
}

export default Button;
Button.propTypes = {
  onClick: PropTypes.func,
};
