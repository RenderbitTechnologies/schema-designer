/**
 * @flow
 */
import { connect } from 'react-redux';
import Schema from '../components/Schema';
import { toggleDbModal, toggleTableModal } from '../actions/ActionCreators';

const mapStateToProps = (state) => ({
    dbName: state.database.name,
    dbModal: state.ui.database.showModal
});

const mapDispatchToProps = (dispatch) => ({
    toggleDbModal: (editMode = false) => {
        dispatch(toggleDbModal(editMode));
    },
    toggleTableModal: () => {
        dispatch(toggleTableModal());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Schema);
