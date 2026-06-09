// api/trigger.js

export default async function handler(req, res) {
  try {
    const response = await fetch("https://slave-api.onrender.com/run", {
      method: "POST"
    });

    const text = await response.text();

    return res.status(200).json({
      status: "ok",
      render_status: response.status,
      render_response: text
    });

  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message
    });
  }
}