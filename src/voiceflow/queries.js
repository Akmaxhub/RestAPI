const getVoiceflow = "SELECT * FROM medx_voicebot";
const getVoiceflowById = "SELECT * FROM medx_voicebot WHERE id = $1";
const checkPatientExists = "SELECT s FROM medx_voicebot s WHERE s.id = $1";
const addVoiceflowEntry = "INSERT INTO medx_voicebot (id, medicines, symptoms, adverseevents, nomedicinereason) VALUES ($1, $2, $3, $4, $5)";
const deleteEntry = "DELETE FROM medx_voicebot WHERE id = $1";
const updateEntry = "UPDATE medx_voicebot SET medicines = $1 WHERE id = $2";

module.exports = {
    getVoiceflow,
    getVoiceflowById,
    checkPatientExists,
    addVoiceflowEntry,
    deleteEntry,
    updateEntry,
};