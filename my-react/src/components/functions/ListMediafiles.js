import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";

export default function ListMediafiles({ register }) {
	const [media, setMedia] = useState([]);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("uploads/files");
				console.log("response", response);
				setMedia(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getMedia();
	}, []);

	return (
		<select name="featured_media" ref={register}>
			<option value="">Select media</option>
			{media.map((media) => {
				return (
					<option key={media.id} value={media.id}>
						{media.name}
					</option>
				);
			})}
		</select>
	);
}

MediaDropdown.propTypes = {
	register: PropTypes.func,
};

MediaDropdown.defaultProps = {
	register: () => {},
};