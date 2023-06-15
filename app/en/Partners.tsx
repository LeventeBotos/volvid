export const Partners = () => {
  return (
    <div className="my-5 grid w-full grid-cols-4 justify-evenly gap-4 p-3 md:grid-cols-8">
      <img
        alt="mol logo"
        src="https://seeklogo.com/images/M/mol-logo-A17DF61F32-seeklogo.com.png"
      />
      <img
        alt="omv logo"
        src="https://companieslogo.com/img/orig/OMV.F-03718e03.png?t=1654139773"
      />
      {/* <img
        alt="nitrogenmuvek logo"
        src="https://www.nitrogen.hu/images/logo.png"
      />
      <img
        alt="borsodchem logo"
        src="https://edwards-vakuumszivattyu.hu/wp-content/uploads/2020/11/borsodchem-logo-vector.png"
      />
      <img
        alt="bayenaoil logo"
        src="https://www.bayernoil.de/wp-content/themes/bayernoil/assets/img/bayernoil_logo.svg"
      />
      <img
        alt="linde logo"
        src="https://www.lindegas.hu/hu/images/Linde_RWD_Claim-Cyan_Left_tcm71-504200.png"
      />
      <img
        alt="opal logo"
        src="https://www.golansecurity.hu/wp-content/uploads/2018/06/partnerek_opal_h.png"
      />
      <img
        alt="mpk logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAAArlBMVEX///8PcmKxlUQAbFsAY1AAb14AaFYAZlQAalkAbl4AaVgAZ1QAYk8AbV3l7evQ3tvw9fTu8/Le6Ob3+vm80Myjv7kvfW+PsqvD1dE+hHcXdWXV4t+zysVtnZNIiXyBqaFXkYWYuLGEq6Njl42sjjOhvrhsnZNdlImtkDfPv5dPjIBDhnknemvZza+qiyrs5tj18uuyl0jj2sTw6+C3nVbGs4K+p2rAq3Ho4M7EsHy+s/W+AAAPrUlEQVR4nO1d6XbiuBIO0WIbEjazOGD2ENIJyXT3zPT0vP+LXcg0WmypUMk2pO/x96NPnxNsq1R7qSTd3NSoUaNGjRo1atSoUaPG74u4PU0G6XC43W6HaZp0pu342kMqDe1kuN6NgiDgvBmSD4Qh5zygfLRZp53utQdYCL3B4kAbJ4RFDROiiIQ8IMtx8lvS2U5nLAiJmTYdjHA6WQx+LzI7430QMgfqFDKb9GHVv/bAHdFZEE5Q9AkyW5Px56eyN25w4kHeCSTYDz+1qU1eaBH6PhARuulcmxAbhg3uI595sGCUXpsYA+IxD88MnDFywuH/MCs5G16bogzidWCVUHZPDo4+mLzuZov1eLVajdeL2fKBBS0eEjupIdlemyoVYxuB9wfX/jDbJn2T0+tNB6unPbWa35B8Gk5uzTaUhcFkkZ51AvF0+MRaZi/abAwuQcA5JA2TDhLenKU955e0h7tW894wTa3XqzvK7rKVn/97Hq3xdj+Z8WY+3ovoooJhIzAMcoNiYWvm69eSjcGvEpaUOmYUuq88R2BBlxZvGzw3a/SprBFjkeZklNCnaeHXJnOaey+7Trzz1MoOJFi4GxgI/U2OSDou5c0otCcZrSF0XV783H7KEhk+XDo6T6muMYzOyk1p28uMJWPhZYV1QfXPt17apX+jM2rqjLy7ZLAz1709aVRj1lOuRwPBrJLPGNCbaF9m1ZmCeBPoCjmv6ks6+no8Ge6rDLESPUYn+0sYnY4+sXRd7efinRZeMFaOX4KQaIYmItWbuaFmvBkp37DpSO503biE3PQ1FxzxamnUKaxaSAWWqrCySmnMUIjPV7/+/P729v1P9HNjVT2isDoap+qHWIi2pG9/vT8+Pz8/Pj7+/Qfy0YFGI6tqcaCt2lI2wX7m7fH59oTn9x9fcU9P1RwrmiC/7YiuugZDRlhD8+PxVsP7G+75trq8xR6QX3fDXnHCBBtmfL19vs3g/QvuFd2JOoAdcgAuWCqWm7xgn/6WJdCDj7FKIy8/ahzzIhT+k+PhB41IoxNPFFn1sOcwVItGXrFPf383UXh7+w35nrih8JGW6zp6ShEjGqEfN4npEY/fseNQovKSzepeSgiboIO2n48WEm//wr5KdVxkg30awEIxNRwf6v9t1MQPbUQHOh0lwArKW6JTswvqUUW0Unj7jDSqN8fqtEJjWZlVTIpN3FeLsTmSiPSNRyxkVSUqKwLYSBKJzwLDn1ZVvL39x+N9D9Lk8HLWIBMpGR7G9IA/ABJ/eLxPlSpaiqgq7pZ7Rfhlc/GmI20DK6NgpVjTwC+ggHTxb683rqU68uJWtS9njPiWMe1c9LCoHxhJdSSeg5J4VZy+7zv+tZL4iC8AfKCtTHzR6opia6h3yfu7nY2+r1xJUS0aq8r8hRRYx7T5fl85PWAkpCsqljqmMoXiBeqJbxY2Pvu/Uqkj+QRcElKrm4Us119GCt9/FnjlTFj6qIjjGAqJ93P6Al9NbHz0iN4kYilgQYGSPCvlLUcY3P/jv8VeuQ1LYGMq1jDZsthwDnz8lrE52OpUHg3JAG9tlOaUlrDA9uVdIfLxG7ZYnIe0hZFvcpyIV7BS8uuvX56PxfDn58f3H9iKhhGyWuUbjc/lG8qqBP359uXLl7efJa1nSUXyDHFkdFrQuVYHqY3c6/m1cDw+2tzrDNJ00HHhVzx1/mkG0qn5uW2piejyQXvBAt4Mwyan+zEs5N3hK/3109EKnY5Kg4Ou7R4wEI9zbJo4u5M5ZkTozk5kf0NlZfTw0xXyS2PxIR9zsZMBOO7BbrZ1jN3ZRj7LtoFx5FKCTKoIdnYOCiIfRi6QTPI9uE3jyNvM0Hy6xH3s5fQxhq+Np0KTkSKwMDWKE0OI2843njbQVUypTi10dLIU04NT5B41jNu4mNUw74pD1hYEiVhhU+Q0xE3rk2VHQq7iObbsXAlxzXxCaKI96rmDAIjAgaL8VdvMxAOCzHuse3Nw1q0j1swCpE2dnZgR4WzczronM1O/6+TaysUPcbZRqD5244p4ECc3UysTs9nK0L5FDheMCUlFJnx9wX5cDP8C7PbSA5C1nUSc4ZD5UIB57Gbrp8SZLscsd9QoyehbfqGFUn8hOBxVmRChDW5GH+Ate6o/GAMk4lKjl5P645RYML+JqQ8nIBP1MaTQbkeKicelxGEsY1+MlSKeUsq3FgRy6G1oOlDLmFMZ4CCeElOMyqMGVj9wglogAecDZeSEacTEcMIWoLRicv6cAqVwnTaB3zHMIphQRkwg9noyG01EqpieZeJh6Eo4Ds4IJvYf+zBE6AkmKHLaDa6seCbQlGBqfiLYRJSM21K63T80PLMh/DTT8gnQxSAqt9Jyhc7PdE7TgllJdzyzQBEmMFDAhGMyEnd2NiJ+RBjvlRsTNWM5B7XRvewnjDN3fkbEj4jg3cHW/IdoKZ6BgnaMYom0KHS2jhsxK86xDRSPZaAsci0hbXRfDJMm1TmEE3aAu+p8nN2RCrFHRvZ9iI3uYYeIVNwVS8yts/oCqVEeXIr/BmSjqwxJ8+i8MiHm1jUD64LcyNMokiV7HaSBWJnunwyBM+NjYcxdq2EzgIksnyYr8gQ96VyG7wo1cS2mClfqOo2WwuIvetSW5F+Q4RnIf+d8XGbFjg8IvrsmYLbC4geF25skZ4sUhwBl/84NbrIM40iiKI45ri+DdvEYU+UjNWlJYjiNdhuxtI+OJRFBInNrmNpBTDx6qnykxuTYQY/qyMaJINHRBYgU4N4pawNjlP+UIx+phcJJx2Bc5GbwhLa3HFNpQaKbJ4UizV/hhmEWZJVtBbExdOqMFkGqa/I3QJEI5gsnC5cvkitdg2DY4JQfoUnEcRHK+kTMaHDxMpMAM02nsNOfRBddBAuL0k3l/YoSiYD1ApcOyhFWF1EWFSqkKXVmQ3QgrSVY9XEpVouFaVeLKkk87xfBwqJauDe4eGktDWvn5rdYgPaLmOgGGpw2/4ZITf4dnCiHuho6ukHEqKCI6VNqyLdkjSMfxqo/Oyt96BgVkWlAApZRIkPWLNO7fBirvuicYe+KATu3bTjni6C5z+qFwcVTUbuAC45n7KTMF51bL5yzfshp5y1hfj5ktgQXHM84L5H1u/elutZuwNArb9wMPJeOAy44wh7do3bjWIEDA2iTHTQcRygMGlxwhLnjUYGTj4BBMJgGmTyUwf5KawkWHOHyv0cddejEeDCZNTuz/GKUVAW44LiExutRDZdFO8hCgSUJc0NS3sUrcTNYcATL/3IhzXlNQ+7iB7wGWFiyRSS5iFb5AFxwBMr/cmUK0Xjlsr4IlgdtXWXZNUWtpQp8I1D+l+uLiH4Gh1VicM7tOqyzkWmSBdYqgSqw1yrx+vxDsOZYdaKnNqHeN3VDCWq3vfw/91nrP9+xAdo/yBC3xdHGjO4y4gzaaHtOIJ7CdGy0z/bdwF4MNGyrRnC8MaS1yRtJuOBoUZqpXxOc+JSlewqMRc6GUb1pZ2q0Y2C8ZDsZZeXVPSVDOEtZAY4o/c/3AqNey3aTuV8PnFjtN6+cdAqldxDgjgHTE7FnJ6PSBGeSqJG/Jp4BmIE2Ta0Hvv2oMmU0dTSATUGFmHim4GiqQogYHLuNdHY65dUUOcGVlmIHe4DVIFP5X+5iQPaGy4A5L3dVMvFMwTFf/lfkFLtrSu7TyE3OpkImnmNjbjBS3LD7NJTdNrkAB8wTi5+YDKlBfg+f/24bYM/UFJrmEo7YAfUgG20V2TNl3/k2AHpl3RZdzwBySVmFE+22HjvflCXBTKIJNa6Xck4SFFhkaoKF9i/eJIJZmfgX4CKq39mOV7s2ZrgoVxG8Nq0LZmUMTt8+ySVtjgeC/IwuFttLrMxQS097qmYisC8p0+Qmwz2/I6iknGdCo61NGUs74cCacLf03E7+wb1lWoOwVtlKrWWOHdt0XGApm2RUJi3gFP+DdFCZ4xk6d8YB3JV3YGnb+AUW6sGkcsyJryWf2NiY3hlsXlDmBWYrg/8nE30OJRP9jzlR3pGpGfQnOX0s+bKLWZbGiGY/IKe5wFk1wKlFq0C75/TeejyBL1Z3qj4yvs9Ws+SegiwDMFDOnsrF8fF2f7zONYoYIzyYlX/mfPuJNglj0fHeW/qQK78pFclCR4hJRnFDwtlOF5vlcjcbV3SdVzwYPy3nL5u16fY4uTxQhIla8obb/Vo51HPgip0aJY1qOYczlYZ9aQNTukWc9xRcAsrZDoWzGyVcLH5MZ2lQjzQtfNK9ekzn5xFV9Rzz4m9TllJan+Uq3eIn7+pQHHBp53QXg3KOeTGHcYJ6+DG6kFcFukps597AAEJZgy+hhlgcIzgg8YISLAbXvypYmfFSjtT+gCKqjbtrX1G+VSrVfueYG6Gc091oVX0hGQz1qqtSrOkJivhH7JrBqlrVKdcwqEbsmma1XeE41Cs1KrrkyQFd9a4p1z0ZztBuKPKqyxZHV7u9p/ysYEeuTWNXPRyPl11IOUJdMCJXkNWeKqVFzqK3I1Y/cX+RS0lVtNVbUdEXsrl+RLvosXHZkLyjXkhenVHXlhoi9y7lEpBqVz82qhOhjraccne59HGh9hdEpKobJo/QVzNaF8o74tdQo7BaFdFvQyWjSyjkVKu7V39rry6rUamRsBkr/YsXuHt5qp+/W/XV5N25frs0+gpWH7Qj/druRpUZZMr1j6GvYPVDvNcaYxkt2vZmRfdFb53gy6q+lMNSX/wjrBqN3Ab6Su3FbrM+YpzpN+Cv5d9on2SWaSN62TJukpngiG7KteWdh8wXSKP8WYTRG2U61UslcjrPEHhJNZRYZJtjGH0qZ6I7OQIjep3iZhJmu2MYXRb3IINRlsAGmVxaSE+Il/mzevhkWMR19caE5yeuMq/kgJTn9o5EhG48yypxOqeGyxkm161Ox0/UsAm6yWdoKuN0R8P8uxgt/zJwLDp7U38q48Fy6K5A09UDzWn2cbKCl+sW338hJcbWRkaCcLc9eytPL1m9tFrE2NfH95+mv2AbWrZzRYTTxm6cdkwZULuTrpck4MTSRNxsfJZV6Q+s8nZHYWfIA0pGD/PdbDEejxeb5ct8RGjAQzPzPiaHs+uv82WwJU34UO2IHXvJjjj+78xv+f5TcfCEdB84nTp9FoTOP40OZtHZUJtiOePgcRafworaEA9HgV3BzoIR+vIpJVRHfzzxo5KF9GF4idJMGehvX6nVF1jYx4OdqSfzEyNO1nvadCHz2LJLH8bXbpPwQ5ysNg169H5muY2OHpNOnra/J3kC8TQdz+YNGhwPLODNsNk8/Mt5EAST+Ww16H+uTt5CiNvTTjL4QJJ0+u3/I9Jq1KhRo0aNGjVq1KhRo0aNGjVqeOJ/cbzdqgTYqssAAAAASUVORK5CYII= "
      /> */}
    </div>
  );
};
