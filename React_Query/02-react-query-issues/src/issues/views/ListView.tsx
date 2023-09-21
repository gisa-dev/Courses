import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';

export const ListView = () => {
	const [seletedLabels, setSeletedLabels] = useState<string[]>([]);

	const onLabelChange = (labelName: string) => {
		seletedLabels.includes(labelName)
			? setSeletedLabels(seletedLabels.filter((label) => label !== labelName))
			: setSeletedLabels([...seletedLabels, labelName]);
	};

	return (
		<div className='row mt-5'>
			<div className='col-8'>
				<IssueList />
			</div>

			<div className='col-4'>
				<LabelPicker
					seletedLabels={seletedLabels}
					onChange={(labelName) => onLabelChange(labelName)}
				/>
			</div>
		</div>
	);
};
