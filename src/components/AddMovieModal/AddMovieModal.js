import React, { useState } from "react";
import { Modal, Button, Form } from "semantic-ui-react";

const AddMovieModal = ({ open, onClose, onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const [isValidTrailer, setIsValidTrailer] = useState(true); // State to track validity

  const handleSubmit = () => {
    // Create a movie object with the entered data
    const newMovie = {
      name: title,
      description: description,
      trailer: trailer
    };

    // Check the validity of the trailer URL
    const isTrailerValid = isValidYouTubeUrl(trailer);
    setIsValidTrailer(isTrailerValid);

    // If the trailer URL is valid, proceed with adding the movie
    if (isTrailerValid) {
      // Pass the new movie object to the parent component for handling
      onAddMovie(newMovie);

      // Clear the form fields
      setTitle("");
      setTrailer("");
      setDescription("");

      // Close the modal
      onClose();
    }
  };

  // Regular expression to validate YouTube URLs
  const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_\-]+)/;

  const isValidYouTubeUrl = (url) => {
    return youtubeUrlPattern.test(url);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Add a New Movie</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Title"
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Form.Input
            label="Trailer"
            placeholder="Enter movie trailer URL (YouTube)"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
            required
            error={!isValidTrailer} // Highlight the input if it's not valid
          />
          {!isValidTrailer && (
            <p style={{ color: "red" }}>Please enter a valid YouTube trailer URL.</p>
          )}
          <Form.TextArea
            label="Description"
            placeholder="Enter movie description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button type="submit" positive>
            Add Movie
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AddMovieModal;
