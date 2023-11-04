import React from 'react'

const SubmissionDataTable = ({submissionData}) => {
  return (
    <>
        {
            submissionData.map((currentData) =>{
                const {title,domainName,description,status} = currentData;

                return (
                    <tr>
                        <td>{title}</td>
                        <td>{domainName}</td>
                        <td>{description}</td>
                        <td>{status}</td>
                    </tr>
                )
            })
        }
    </>
  )
}

export default SubmissionDataTable
