import React from 'react';
import './Card.css';


const Card = ({pokemonInfo}) => {
	
	
	return (
			<div className="info_inner">
				<img className="info-img" src={pokemonInfo.sprites.front_default} alt="info"/>
				<h1 className="capitalize">{pokemonInfo.name}</h1>
				<table className="info-table">
					<tbody>
						<tr>
							<td>
								Type
							</td>
							<td className="capitalize">
								{pokemonInfo.types[0].type.name}
							</td>
						</tr>
						<tr>
							<td>
								Attack
							</td>
							<td>
								{pokemonInfo.stats[4].base_stat}
							</td>
						</tr>
						<tr>
							<td>
								Defence
							</td>
							<td>
								{pokemonInfo.stats[3].base_stat}						
							</td>
						</tr>
						<tr>
							<td>
								HP
							</td>
							<td>
								{pokemonInfo.stats[5].base_stat}													
							</td>
						</tr>
						<tr>
							<td>
								SP Attack
							</td>
							<td>
								{pokemonInfo.stats[2].base_stat}
							</td>
						</tr>
						<tr>
							<td>
								SP Defence
							</td>
							<td>
								{pokemonInfo.stats[1].base_stat}					
							</td>
						</tr>
						<tr>
							<td>
								Speed
							</td>
							<td>
								{pokemonInfo.stats[0].base_stat}
							</td>
						</tr>
						<tr>
							<td>
								Weight
							</td>
							<td>
								{pokemonInfo.weight}						
							</td>
						</tr>
						<tr>
							<td>
								Total moves
							</td>
							<td>
								{pokemonInfo.moves.length}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
}

export default Card