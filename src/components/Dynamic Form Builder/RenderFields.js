import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from 'react';
import CustomModal from '../CustomModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const RenderFields = ({ fields, set_fields, set_field_name, set_field_data_type, set_is_field_required, set_add_or_edit_new_field }) => {

    const [delete_warning, set_delete_warning] = useState(false)
    const delete_field = () => {
        const all_fields = [...fields];
        all_fields.splice(delete_warning, 1)
        set_fields(all_fields);

        set_add_or_edit_new_field(false);
        set_delete_warning(false);
        set_field_name("");
        set_field_data_type("Text");
        set_is_field_required(false);
    }
    return (
        <Box sx={{ width: 1, flex: 1, display: "flex", flexDirection: "column" }}>
            <style
                dangerouslySetInnerHTML={{
                    __html: "\n  #basic-menu{\n    z-index:9931000 !important;\n  }\n  "
                }}
            />
            {typeof delete_warning == 'number' ? (
                <CustomModal set_preview={set_delete_warning}>
                    <Box
                        sx={{
                            width: { xl: "27%", lg: "35%", md: "40%", sm: "50%", xs: "100%" },
                            h: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            bgcolor: "white",
                            cursor: "auto",
                            borderRadius: 3,
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <Typography variant="subtitle2">
                            Are you sure you want to delete it?
                        </Typography>
                        <Box mt={2}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    delete_field()
                                    set_delete_warning(false);
                                }}
                            >
                                Yes
                            </Button>
                            <Button
                                variant="gray_button"
                                onClick={() => {
                                    set_delete_warning(false);

                                }}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </CustomModal>
            ) : (
                ""
            )}

            {/* Fields  */}
            {fields.map((field, index) => {
                return (
                    <Box key={field.id}>
                        <Box sx={{ borderRadius: 2, py: 1, px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2, boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.04),0px 3px 4px 0px rgba(0,0,0,0.06),0px 1px 8px 0px rgba(0,0,0,0.04)", }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant='subtitle2'>
                                    {field.name} {field.required ? <span style={{ color: "red" }}>*</span> : ""}
                                </Typography>
                            </Box>

                            <Box sx={{ flex: 1, display: 'flex' }}>

                                <Box sx={{ flex: 1, textAlign: 'right' }}>
                                     <DeleteIcon sx={{ height: '3vh', p: 1, py: 0.5, mb: 0.5, width: 35, height: 1, borderRadius: 15, cursor: "pointer", "&:hover": { bgcolor: "#e8e8e8" } }}
                                        onClick={() => {
                                            set_delete_warning(index)
                                        }}
                                    />
                                    <EditIcon sx={{ height: '3vh', p: 1, py: 0.5, mb: 0.5, width: 35, height: 1, borderRadius: 15, cursor: "pointer", "&:hover": { bgcolor: "#e8e8e8" } }}
                                        onClick={() => {
                                            set_add_or_edit_new_field(index);
                                            set_field_name(field.name);
                                            set_field_data_type(field.inputType);
                                            set_is_field_required(field.required);
                                        }}
                                    />

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}
export default RenderFields;