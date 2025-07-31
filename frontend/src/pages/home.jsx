import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState('');
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (meetingCode.trim() === '') return;
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="navBar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>Apna Video Call</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <IconButton onClick={() => navigate('/history')}>
            <RestoreIcon />
          </IconButton>
          <p>History</p>

          <Button onClick={() => {
            localStorage.removeItem('token');
            navigate('/auth');
          }}>
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              <TextField
                fullWidth
                onChange={e => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
              />
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="rightPanel">
          <img srcSet="/logo3.png" alt="Video Call Illustration" />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
