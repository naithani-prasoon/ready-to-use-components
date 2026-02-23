import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';

// Your goal is to replace the "TODO" sections below with functional Material UI components.
// You may use the official Material UI documentation: https://mui.com/material-ui/getting-started/

/*
  Please implement your solution using "production-ready" code.

  For this study, this means:
    - Prioritize code quality and proper structure over speed.
    - Write code as if it will be deployed to a real user base.
    - Follow standard industry best practices for front-end development.
 */

const DashboardShell = () => {
    // State examples (You may use these or create your own)
    const [modalOpen, setModalOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(true);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            {/* =================================================================
          TODO: TASK 1 - NAVIGATION BAR
          Implement a responsive App Bar (Navigation Bar) here.
          It should contain the App Title (e.g., "Client Dashboard") and maybe a user icon.
         ================================================================= */}
            <Paper
                elevation={3}
                sx={{ p: 2, mb: 4, backgroundColor: '#e0e0e0', textAlign: 'center', borderBottom: '2px dashed gray' }}
            >
                <Typography variant="h6" color="text.secondary">
                    [TASK 1: Insert Navigation Bar / AppBar Here]
                </Typography>
            </Paper>

            <Container maxWidth="lg" sx={{ flexGrow: 1, mb: 4 }}>

                {/* =================================================================
            TODO: TASK 5 - ALERT / NOTIFICATION
            Implement an Alert (info variant) component here.
           ================================================================= */}

                <Box sx={{ mb: 3, p: 2, border: '1px dashed orange', borderRadius: 1 }}>
                    <Typography variant="body1" color="text.secondary" align="center">
                        [TASK 5: Insert Alert Component Here]
                    </Typography>
                </Box>

                <Grid container spacing={3}>

                    {/* LEFT COLUMN: DATA ENTRY */}
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h2" gutterBottom>
                                New Entry
                            </Typography>

                            {/* =================================================================
                  TODO: TASK 2 - FORM
                  Implement a Form here with at least 3 inputs (e.g., Name, Email, Role).
                  Include a Submit button.
                 ================================================================= */}
                            <Box sx={{ p: 4, border: '1px dashed grey', borderRadius: 1 }}>
                                <Typography align="center" color="text.secondary">
                                    [TASK 2: Insert Form Components Here]
                                    <br />(TextFields, Selects, Buttons)
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper sx={{ p: 3, height: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h2">
                                    User Data
                                </Typography>

                                {/* =================================================================
                    TODO: TASK 3 - MODAL DIALOG TRIGGER
                    1. Create a button here that opens a Modal.
                    2. The Modal should contain some informational text or a confirmation action.
                   ================================================================= */}

                                <Button variant="outlined" color="secondary" onClick={() => setModalOpen(true)}>
                                    [TASK 3: Trigger Modal]
                                </Button>
                            </Box>

                            {/* =================================================================
                  TODO: TASK 4 - COLLAPSIBLE DATA TABLE
                  Implement a Table that displays complex data.
                  Rows should be collapsible to show more details.
                 ================================================================= */}

                            <Box sx={{ p: 5, border: '1px dashed grey', borderRadius: 1, minHeight: '300px' }}>
                                <Typography align="center" color="text.secondary" sx={{ mt: 5 }}>
                                    [TASK 4: Insert Collapsible Data Table Here]
                                </Typography>
                            </Box>

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default DashboardShell;